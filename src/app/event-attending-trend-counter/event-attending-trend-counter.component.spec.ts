/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventAttendingTrendCounterComponent } from './event-attending-trend-counter.component';

describe('Component: EventAttendingTrendCounter', () => {
  it('should create an instance', () => {
    let component = new EventAttendingTrendCounterComponent();
    expect(component).toBeTruthy();
  });
});
