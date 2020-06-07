import { Subscription } from 'rxjs';

// @Injectable()
export abstract class LogWriter {
  protected subs = new Subscription();

  public finish(): void {
    this.subs.unsubscribe();
  }
}
