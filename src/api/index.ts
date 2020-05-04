import request from "@/utils/request";
import { topicListEntity, topicListParams } from "@/type";

export function getTopicLists(
  params?: topicListParams
): Promise<Array<topicListEntity>> {
  return request.get("topics", {
    params
  });
}
