describe('App Component 2', () => {
  it('should be created', () => {
    // Arrange
    // let isMobile = true;

    // Act
    const isMobile = setIsMobile(false);

    // Assert
    expect(isMobile).toBe(false);
  });
});

function setIsMobile(value: boolean) {
  return value;
}
