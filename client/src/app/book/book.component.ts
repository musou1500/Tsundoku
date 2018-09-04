import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

/**
 * 本棚画面や検索画面で表示される、<br>
 * 「本のサムネイル」と「サムネイルをクリックした時に表示される詳細画面」
 */
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() public title: string;
  @Input() public author: string;
  @Input() public desc: string;
  @Input() public isbn: string;
  @Input() public image: string;

  visible = false;

  constructor() {}

  ngOnInit() {}

  /** 本の詳細を表示する */
  show() {
    if (this.visible === false) {
      $('#bg').show();
      $('#filter').show();
      $('#details').show();
      this.visible = true;
    }
  }

  /** 本の詳細の表示を終了する */
  close() {
    $('#details').hide();
    $('#filter').hide();
    $('#bg').hide();
    this.visible = false;
  }
}
