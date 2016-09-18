/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HomeRouteComponent } from './home-route.component';

describe('Component: HomeRoute', () => {
  it('should create an instance', () => {
    let component = new HomeRouteComponent();
    expect(component).toBeTruthy();
  });
});
