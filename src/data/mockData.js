export const mockItems = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  subtitle: `Category ${i % 10}`,
  description: `This is a description for item ${i + 1}.`,
  date: new Date(Date.now() - i * 1000000).toISOString(),
}));