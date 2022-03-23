/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data

  let text = '早安呀，我可爱的霞贝贝~\n'

  // 工作日/休息日，需要排除节假日
  const week = weekToday()
  if (['星期六', '星期日'].includes(week)) {
    text += `
    如果我霞贝贝还没起床呀！灰崽哥哥就等着霞贝贝起床给我说早安呦🤣
    嗯哼~，既然今天是${week}，就让你再睡会懒觉~下次可不能啦~😝\n`
  }
  else {
    text += `
如果我霞贝贝已经起床啦！灰崽哥哥向你说早安呦~，记得吃早饭呀😆\n
嗯哼哼~今天可是${week}哦，因为你所以我~ 😘\n`//上班别迟到了
// text += `
// 如果我霞贝贝已经起床啦！灰崽哥哥向你说Sorry呦~，记得吃早饭呀😆\n
// 嗯哼哼~BUG改了哦~ 嘤嘤嘤嘤嘤嘤~`
  }

  // 添加笑话
  if (caiHongpi) {
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}\n`
  }

  if (sayLove) {
    text += `
${sayLove.content}\n`
  }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }

  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
