export const transformNumber2String = (text: string) => {
    const list = [
        'tourInfoId', 
        'previewTourInfoId', 
        'auditTourInfoId', 
        'tourInfoScoreId', 
        'tourDaily[a-zA-Z]+Id', 
    ];
    return text.replace(new RegExp(`\\\\?"(${list.join('|')})\\\\?":(\\d+)`, 'g'), '"$1":"$2"')
}