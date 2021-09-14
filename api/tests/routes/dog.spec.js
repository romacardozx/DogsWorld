/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const assert = require('assert');
const session = require('supertest-session');
const app = require('../../src/app');


const agent = session(app);

const doggy = {
    name: 'example',
    height: 50,
};

describe('Dog routes', () => {
    
    describe('GET /dogs', () => {
        it('should get 200', () => agent.get('/dogs').expect(200)).timeout(40000);
    
    });

    describe('GET /dogs/:name', () => {
      it('should get 200', (done) => {
          agent.get('/dogs/Golden').expect(200).timeout(40000);
          done();
      });
      it('me re cabio Diego me hace migrar deaaa.', (done) => {
          agent.get('/dogs/impossibleToExist').expect(404).timeout(40000);
          done();
      });
  });


  describe('POST /dogs', () => {
      it('should create a new dog', (done) => {
          agent.post('/dogs').send(doggy).expect(200);
          done();
      });
  })})