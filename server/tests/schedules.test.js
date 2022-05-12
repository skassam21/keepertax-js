/**
 *
 * !!!!!!!!!!!!!  IMPORTANT  !!!!!!!!!!!!!!!!!
 *
 * Please do not modify this file
 *
 */

const globals = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');
const {
  multipliers1,
  transactions1,
} = require('../src/generateScheduleC/generateScheduleC1');
const {
  multipliers2,
  transactions2,
} = require('../src/generateScheduleC/generateScheduleC2');
const {
  multipliers3,
  transactions3,
  jobs3,
} = require('../src/generateScheduleC/generateScheduleC3');

const { describe, it, expect } = globals;

describe('POST /api/generateScheduleC1', () => {
  it('should return the proper format', async () => {
    const res = await request(app).post('/api/generateScheduleC1').send({
      multipliers: multipliers1,
      transactions: transactions1,
    });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        car: expect.any(Number),
        meal: expect.any(Number),
        payment: expect.any(Number),
      })
    );
  });
});

describe('POST /api/generateScheduleC2', () => {
  it('should return the proper format', async () => {
    const res = await request(app).post('/api/generateScheduleC2').send({
      multipliers: multipliers2,
      transactions: transactions2,
    });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        car: expect.any(Number),
        meal: expect.any(Number),
        payment: expect.any(Number),
        home: expect.any(Number),
        phone: expect.any(Number),
      })
    );
  });
});

describe('POST /api/generateScheduleC3', () => {
  it('should return the proper format', async () => {
    const res = await request(app).post('/api/generateScheduleC3').send({
      multipliers: multipliers3,
      transactions: transactions3,
      jobs: jobs3,
    });
    expect(res.status).toEqual(200);
    expect(res.body).toContainEqual(
      expect.objectContaining({
        meal: 0,
        car: 0,
        payment: 0,
        home: 0,
        phone: 0,
      })
    );
  });
});
