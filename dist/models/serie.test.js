import { Serie } from './serie';
describe('Given "Serie" data model', () => {
    test('Then it should instantiate a serie', () => {
        const mockName = 'Test name serie';
        const mockCreator = 'Test creator';
        const mockYear = 2018;
        const mockPoster = 'Test post';
        const mockScore = 9.5;
        const mockEmmies = 3;
        const result = new Serie(mockName, mockCreator, mockYear, mockPoster, mockScore, mockEmmies);
        expect(result).toBeInstanceOf(Serie);
        expect(result).toHaveProperty('name', mockName);
        expect(result).toHaveProperty('creator', mockCreator);
        expect(result).toHaveProperty('year', mockYear);
        expect(result).toHaveProperty('poster', mockPoster);
        expect(result).toHaveProperty('score', mockScore);
        expect(result).toHaveProperty('emmies', mockEmmies);
        expect(result).toHaveProperty('watched', false);
    });
});
