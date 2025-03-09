const productTestHelper = require('./test-utils/productTestHelper');
const { list } = require('../products');
const { mockDb, mockProducts } = require('./db.mock');

// Mock the db module to use our mockDb
jest.mock('../db', () => mockDb);

describe('Product Module', () => {
    // Set up and clean up test data


    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeAll(async () => {
        await productTestHelper.setupTestData();
    });

    afterAll(async () => {
        await productTestHelper.cleanupTestData();
    });

    describe('get', () => {
        it('should get a product by id', async () => {
          const mockProduct = { description: 'Product 1' };
          mockModel.findById = jest.fn().mockResolvedValue(mockProduct); 

          const product = await get('some-product-id'); 
          expect(product).toBeDefined();
          expect(product.description).toBe(mockProduct.description); 
        });
      });


    describe('list', () => {
        it('should list products', async () => {
            const products = await list();
            expect(products.length).toBe(2);
            expect(products[0].description).toBe('Product 1');
            expect(products[1].description).toBe('Product 2');
        });
    });

    describe('destroy', () => {
        it('should delete a product', async () => {
          mockModel.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 }); 

          const result = await destroy('some-product-id'); 
          expect(result).toBeDefined();
          expect(result.deletedCount).toBe(1);
        });
      });


});