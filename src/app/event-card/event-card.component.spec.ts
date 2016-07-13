/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';

describe('Component: EventCard', () => {
  it('should create an instance', () => {
    let component = new EventCardComponent();
    expect(component).toBeTruthy();
  });
});
