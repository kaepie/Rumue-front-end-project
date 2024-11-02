import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import os from 'os'

function getDownloadPath() {
    const homeDir = os.homedir();
    const downloadPath = path.join(homeDir, 'Downloads');
    return downloadPath;
}

export async function POST(req, res){
    const {Date, Name, Description, Price} = req.body
    const nameList = String(Name).split(" ")
    const name = nameList[0]+" "+nameList[1][0]+"."

    const dateTime = String(Date).split(" ")

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
                h1 { text-align: center; margin-bottom: 30px; }
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
            <div class="all-details">
                <div class="company-info">
                    <h2>RUMUE Service&trade;</h2>
                    <p>50 Ngam Wong Wan Rd, Lat Yao, Chatuchak, Bangkok 10900, Thailand</p>
                    <p>Email: lerdphipat.k@ku.th | Phone: 092-272-0521</p>
                </div>
                <div class="invoice-details">
                    <p><strong>Date:</strong> ${dateTime[0]}</p>
                    <p><strong>Time:</strong> ${dateTime[1]}</p>
                    <p><strong>Customer Name:</strong> ${name}</p>
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
                        <td>${Description}</td>
                        <td>$${Price}</td>
                    </tr>
                </tbody>
                <tr class="total">
                    <td>Total</td>
                    <td>$${Price}</td>
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

    // Define a path in the 'download' directory to save the PDF
    const downloadPath = getDownloadPath();
    if (!fs.existsSync(downloadPath)) {
        return res.status(500).json({
            message:"Can't find download folder"
        })
        return
    }

    const  pdfFilePath = path.join(downloadPath, `invoice_${InvoiceNo}.pdf`);

    try {
        // Launch Puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        // Save PDF to the 'download' directory
        await page.pdf({
            path: pdfFilePath,
            format: 'A4',
            printBackground: true,
        });

        await browser.close();

        // Send a success response with the file path
        res.status(200).json({
            message: 'Invoice PDF generated successfully',
            filePath: `/download/invoice_${InvoiceNo}.pdf`,
        });
    } catch (error) {
        console.error('Error generating invoice:', error);
        res.status(500).json({ message: 'Error generating PDF' });
        return
    }
};

export default generateInvoice;
