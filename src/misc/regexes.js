export const findProxies = str => str.match(new RegExp('[1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[:][1-9]?[0-9]{1,5}', 'g'));
export const findIPv4s = str => str.match(new RegExp('[1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}(?!/)', 'g'));
export const findIPv6s = str => str.match(new RegExp('([0-9a-f]{1,4}:){7}([0-9a-f]){1,4}', 'g'));
export const findLuminatisIPs = str => str.match(new RegExp('^s.*?-ip-(.*)', 'g'));
export const findIPsWithRanges = str => str.match(new RegExp('[1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[.][1-2]?[0-9]{1,3}[/][1-2]?[0-9]{2}', 'g'));

export const isIPv4 = str => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
export const isIPv6 = str => /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})?$/.test(str);
export const isLuminatiIP = str => /^s.*?-ip-(.*)$/.test(str);
export const isURL = str => /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(str);
export const isPath = str => /^[a-z]:((\/|(\\?))[\w .]+)+\.txt$/i.test(str);
