import { animate, style, transition, trigger } from '@angular/animations';

export function getComputedRect(element: HTMLElement): ClientRect {
  return {
    top: +window.getComputedStyle(element).top.replace('px', ''),
    left: +window.getComputedStyle(element).left.replace('px', ''),
    right: +window.getComputedStyle(element).right.replace('px', ''),
    bottom: +window.getComputedStyle(element).bottom.replace('px', ''),
    width: +window.getComputedStyle(element).width.replace('px', ''),
    height: +window.getComputedStyle(element).height.replace('px', '')
  };
}

export function fitInScreen(scrollContainer, rect, pageX, pageY, anchor: ClientRect, zContextRect = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
}): ClientRect {
  if (scrollContainer) {
    if (pageX - scrollContainer.getBoundingClientRect().left + rect.width > scrollContainer.offsetWidth) {
      rect.right = scrollContainer.scrollWidth - (pageX - scrollContainer.getBoundingClientRect().left);
    } else {
      rect.left = pageX - scrollContainer.getBoundingClientRect().left;
    }

    if (scrollContainer.scrollTop + pageY - scrollContainer.getBoundingClientRect().top + rect.height > scrollContainer.scrollHeight) {
      rect.bottom = scrollContainer.offsetHeight - (pageY - scrollContainer.getBoundingClientRect().top) - scrollContainer.scrollTop;
    } else {
      rect.top = scrollContainer.scrollTop + pageY - scrollContainer.getBoundingClientRect().top;
    }

  } else {
    if (anchor) {
      const margin = 15;

      if ((anchor.left + anchor.width + rect.width) > window.innerWidth) {
        rect.left = anchor.left - (rect.width + margin) - zContextRect.left;
      } else {
        rect.left = anchor.left + (anchor.width + margin) - zContextRect.left;
      }

      if ((anchor.top + rect.height) > window.innerHeight) {
        rect.top = anchor.top + anchor.height - rect.height - zContextRect.top;
      } else {
        rect.top = anchor.top - zContextRect.top;
      }


    } else {
      if (pageX + rect.width > window.innerWidth) {
        rect.right = window.innerWidth - pageX - zContextRect.right;
      } else {
        rect.left = pageX - zContextRect.left;
      }

      if (pageY + rect.height > window.innerHeight) {
        rect.bottom = window.innerHeight - pageY - zContextRect.bottom;
      } else {
        rect.top = pageY - zContextRect.top;
      }
    }
  }

  return rect;
}

export function getCoords(thing: HTMLElement | ClientRect, scrollContainer?: HTMLElement, event?: MouseEvent, anchorElement?: HTMLElement, zContextRect?: ClientRect): ClientRect {
  let rect: ClientRect;

  if (thing instanceof HTMLElement) {
    rect = getRelativeRect(thing);
  } else {
    rect = thing;
  }

  if (event) {
    rect = fitInScreen(scrollContainer, rect, event.pageX, event.pageY, null);
  } else if (anchorElement) {
    rect = fitInScreen(scrollContainer, rect, null, null, anchorElement.getBoundingClientRect(), zContextRect);
  }

  return rect;
}

export function getRelativeRect(element: HTMLElement): ClientRect {
  const rect = element.getBoundingClientRect();
  return {
    top: element.getBoundingClientRect().top,
    left: element.getBoundingClientRect().left,
    right: element.getBoundingClientRect().right,
    bottom: element.getBoundingClientRect().bottom,
    width: element.getBoundingClientRect().width,
    height: element.getBoundingClientRect().height
  };
}

export function getRect(): any {
  return {
    top: null,
    left: null,
    right: null,
    bottom: null,
    width: null,
    height: null
  };
}

export const appearDisappear = trigger('appearDisappear', [
  transition(':enter', [
    style({transform: 'scale(0.75)', opacity: 0}),
    animate(150, style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate(100, style({transform: 'scale(0.75)', opacity: 0}))
  ])
]);
