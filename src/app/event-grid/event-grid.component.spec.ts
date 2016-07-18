/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventGridComponent } from './event-grid.component';

describe('Component: EventGrid', () => {
  it('should create an instance', () => {
    let component = new EventGridComponent();
    expect(component).toBeTruthy();
  });
});
