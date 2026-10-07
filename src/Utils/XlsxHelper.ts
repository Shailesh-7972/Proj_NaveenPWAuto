import fs from 'fs';
import XLSX from 'xlsx';

export class XlsxHelper {

  static readExcel(filePath: string,sheetname: string): Record<string, string>[] {

    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetname];
    return XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
    
    } 
  
}