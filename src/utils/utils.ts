import { TopicListItem } from "@/types/type";

export function formatTabName(topic: TopicListItem): string {
  switch (true) {
    case topic.top:
      return "置顶";
    case topic.good:
      return "精华";
    case topic.tab === "ask":
      return "问答";
    case topic.tab === "share":
      return "分享";
    case topic.tab === "job":
      return "招聘";
    case topic.tab === "good":
      return "精华";
    default:
      return "分享";
  }
}

export function formatDate(str: string): string {
  if (!str) return "";
  const date: Date = new Date(str);
  const time: number = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  let result!: string;
  switch (true) {
    case time < 0:
      result = "";
      break;
    case time >= 0 && time / 1000 < 30:
      result = "刚刚";
      break;
    case time / 1000 >= 30 && time / 1000 < 60:
      result = Math.round(time / 1000).toString() + "秒前";
      break;
    case time / 1000 >= 60 && time / 60000 < 60:
      result = Math.round(time / 60000).toString() + "分钟";
      break;
    case time / 60000 >= 60 && time / 3600000 < 24:
      result = Math.round(time / 3600000).toString() + "小时前";
      break;
    case time / 3600000 >= 24 && time / 86400000 < 31:
      result = Math.round(time / 86400000).toString() + "天前";
      break;
    case time / 86400000 >= 31 && time / 2592000000 < 12:
      result = Math.round(time / 2592000000).toString() + "月前";
      break;
    default:
      result = Math.round(time / 31536000000).toString() + "年前";
  }
  return result;
}
