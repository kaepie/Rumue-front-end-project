import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const split = file.name.split(".");
    const filenameDate = (split[0] + Date.now() + "." + split[1]).replace(/ /g, "_");
    await fs.writeFile(`./public/uploads/${filenameDate}`, buffer);

    revalidatePath("/");

    return NextResponse.json({ path: filenameDate, status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}