/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventGridInfiniteComponent } from './event-grid-infinite.component';

describe('Component: EventGridInfinite', () => {
  it('should create an instance', () => {
    let component = new EventGridInfiniteComponent();
    expect(component).toBeTruthy();
  });
});
