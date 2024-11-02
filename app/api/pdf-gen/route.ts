import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import os from 'os';

function getDownloadPath() {
    const homeDir = os.homedir();
    const downloadPath = path.join(homeDir, 'Downloads');
    return downloadPath;
}

export async function POST(req: Request) {
    const chooseDescirptionFromClass = (Description:any)=>{
        if(Description == "0") return "พรบ."
        else if(Description == "1" || Description == "2" || Description == "3") return `ประกันรถยนต์ชั้น ${Description}`
        return Description
    }
    
    const chooseIDToShow = (Cip: any, Vip: any) =>{
        console.log(Cip, Vip)
        if(Cip) return `<p><strong>CIP ID:</strong> ${Cip}</p>`
        else if(Vip) return `<p><strong>VIP ID:</strong> ${Vip}</p>`
        else return `<p><strong>VIP ID:</strong>1ga577b0-ac18-0x3q-c001-oc5111ct33286</p>`
    }
    



    try {
        const { InvoiceDate, ApproveDate,TranID, Name, Description, Price, Cip, Vip, Brand, Model, Year, Color } = await req.json();

        const nameList = String(Name).split(" ");
        const name = `${nameList[0]} ${nameList[1][0]}.`;

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
                    h1 { text-align: center; margin-bottom: 10px; }
                    .transaction-id {text-align: center; margin-bottom: 30px;}
                    .all-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
                    .company-info, .invoice-details { flex: 1; margin-right: 20px; font-size: 15px;}
                    .invoice-details { text-align: right; margin-right: 0; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
                    th { background-color: #f9f9f9; }
                    .total { font-weight: bold; background-color: #f2f2f2; }
                    .footer { margin-top: 40px; text-align: center; font-size: 12px; }
                </style>
            </head>
            <body>
                <h1>Insurance Invoice</h1>
                <p class="transaction-id"><strong>Transaction ID:</strong> ${TranID}</p>
                <div class="all-details">
                    <div class="company-info">
                        <h2>RUMUE Service&trade;</h2>
                        <p>50 Ngam Wong Wan Rd, Lat Yao, Chatuchak, Bangkok 10900, Thailand</p>
                        <p>Email: lerdphipat.k@ku.th | Phone: 092-272-0521</p>
                    </div>
                    <div class="invoice-details">
                        <p><strong>Invoice Date:</strong> ${InvoiceDate}</p>
                        <p><strong>Approve Date:</strong> ${ApproveDate}</p>
                        ${chooseIDToShow(Cip, Vip)}
                        <p><strong>Customer Name:</strong> ${name}</p>
                        <p><strong>Car Information:</strong> ${Brand+" "+Model+" "+Year+" "+Color}</p>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${chooseDescirptionFromClass(Description)}</td>
                            <td>฿${Price}</td>
                        </tr>
                    </tbody>
                    <tr class="total">
                        <td>Total</td>
                        <td>฿${Price}</td>
                    </tr>
                </table>
                <div class="footer">
                    <p>Thank you for choosing RUMUE for your insurance needs!</p>
                    <p>If you have any questions, please contact us:</p>
                    <p>Email: lerdphipat.k@ku.th</p>
                    <p>Phone: 092-272-0521</p>
                </div>
            </body>
            </html>
        `;

        const downloadPath = getDownloadPath();
        if (!fs.existsSync(downloadPath)) {
            return NextResponse.json(
                { message: "Can't find download folder" },
                { status: 500 }
            );
        }

        const pdfFilePath = path.join(downloadPath, `invoice_${name}.pdf`);

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        await page.pdf({
            path: pdfFilePath,
            format: 'A4',
            printBackground: true,
        });

        await browser.close();

        // Return the path to the PDF file
        return NextResponse.json({
            message: 'Invoice PDF generated successfully',
            filePath: pdfFilePath,
        });
    } catch (error) {
        console.error('Error generating invoice:', error);
        return NextResponse.json({ message: 'Error generating PDF' }, { status: 500 });
    }
}

