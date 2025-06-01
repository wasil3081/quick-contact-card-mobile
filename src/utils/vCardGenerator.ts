
export const generateVCard = (): string => {
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Wasil Anwar',
    'N:Anwar;Wasil;;;',
    'ORG:DCore Technologies;Linkr',
    'TITLE:Product Consultant | Program Manager',
    'TEL;TYPE=CELL:+923458299601',
    'EMAIL;TYPE=INTERNET:wasil1996@gmail.com',
    'EMAIL;TYPE=WORK:wasil.anwar@din.global',
    'URL:https://www.linkedin.com/in/wasilanwar',
    'NOTE:Accomplished product and technology leader with nearly a decade of hands-on experience across fintech, digital banking, customer experience platforms, and mobile wallet ecosystems. Currently serves as Program Manager at DCore Technologies in Singapore.',
    'END:VCARD'
  ].join('\r\n');
  
  return vCard;
};
