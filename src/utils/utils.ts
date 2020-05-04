export function formatDate(str: string): string {
  if (!str) return "";
  const date: Date = new Date(str);
  const time: number = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  let result!: string;
  switch (true) {
    case time < 0:
      result = "";
      break;
    case time / 1000 < 30:
      result = "刚刚";
      break;
    case time / 1000 < 60:
      result = Math.round(time / 1000).toString() + "秒前";
      break;
    case time / 60000 < 60:
      result = Math.round(time / 6000).toString() + "小时前";
      break;
    case time / 3600000 < 24:
      result = Math.round(time / 3600000).toString() + "天前";
      break;
    case time / 86400000 < 31:
      result = Math.round(time / 86400000).toString() + "月前";
      break;
    case time / 2592000000 < 12:
      result = Math.round(time / 2592000000).toString() + "年前";
      break;
    default:
  }
  return result;
}
