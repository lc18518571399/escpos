import { Component } from '@angular/core';
import EscPosEncoder from 'esc-pos-encoder-ionic';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // * Set your variable here
  IP = '192.168.100.89';
  PORT = '9100';
  // * End

  constructor() { }

  ionViewDidEnter() {
    // For POC purposes only
    this.testPrint();
  }

  /**
   *
   */
  async testPrint() {


    // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
    const encoder = new EscPosEncoder();
    const result = encoder.initialize();

    result
      .align('center')




    let canvasQrcode = document.getElementById('qrcode').children[0]
    let arcodePng = canvasQrcode.toDataURL("image/png")

    function getBase64Img() {
      return 'data:image/png;base64,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'
    }
    function get_size(base64) {
      //确认处理的是png格式的数据
      if (base64.substring(0, 22) === 'data:image/png;base64,') {
        // base64 是用四个字符来表示3个字节
        // 我们只需要截取base64前32个字符(不计开头那22个字符)便可（24 / 3 * 4）
        // 这里的data包含12个字符，9个字节，除去第1个字节，后面8个字节就是我们想要的宽度和高度
        const data = base64.substring(22 + 20, 22 + 32);
        const base64Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        const nums = [];
        for (const c of data) {
          nums.push(base64Characters.indexOf(c));
        }
        const bytes = [];
        for (let i = 0; i < nums.length; i += 4) {
          bytes.push((nums[i] << 2) + (nums[i + 1] >> 4));
          bytes.push(((nums[i + 1] & 15) << 4) + (nums[i + 2] >> 2));
          bytes.push(((nums[i + 2] & 3) << 6) + nums[i + 3]);
        }
        const width = (bytes[1] << 24) + (bytes[2] << 16) + (bytes[3] << 8) + bytes[4];
        const height = (bytes[5] << 24) + (bytes[6] << 16) + (bytes[7] << 8) + bytes[8];
        return {
          width,
          height,
        };
      }
      throw Error('unsupported image type');
    }


    let base64img = getBase64Img();
    let img = new Image();
    let width = get_size(base64img).width;
    let height = get_size(base64img).height;
    // let width =40 ;
    // let height =40 ;
    img.src = base64img;
    document.getElementById('main').appendChild(img);

    console.log(111, get_size(base64img))
    await result.image(document.getElementById('main').children[0], width, height)
    await result.image(canvasQrcode, 120, 120)
    result.newline()
      .line('Congratulation, print success')
      .line('IP : ' + this.IP)
      .line('Port : ' + this.PORT)
    const resultByte = result.cut().encode();
    document.getElementById('byte').innerHTML = resultByte
    console.log(7777, resultByte)
    // 给按钮添加点击事件
    // 要保存的字符串
    const stringData = resultByte.toString()
    // dada 表示要转换的字符串数据，type 表示要转换的数据格式
    const blob = new Blob([stringData], {
      type: "text/plain;charset=utf-8"
    })
    // 根据 blob生成 url链接
    const objectURL = URL.createObjectURL(blob)

    // 创建一个 a 标签Tag
    const aTag = document.createElement('a')
    // 设置文件的下载地址
    aTag.href = objectURL
    // 设置保存后的文件名称
    aTag.download = "文本文件.txt"
    // 给 a 标签添加点击事件
    aTag.click()
    // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
    // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
    URL.revokeObjectURL(objectURL)

    // console.log(7777,resultByte)

  }
}
