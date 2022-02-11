import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueIdService } from '@app/@shared/services/unique-id/unique-id.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = '';
  public thumbsUpIcon = faThumbsUp as IconProp;

  constructor(private uniqueIdService: UniqueIdService) {}

  public ngOnInit(): void {
    const idIsEmpty = !this.id;

    if (idIsEmpty) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
