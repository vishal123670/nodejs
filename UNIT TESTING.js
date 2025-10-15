
test('should create a new job entry', async () => {
  const res = await request(app).post('/api/jobs').send({
    company: 'TechCorp',
    position: 'Frontend Developer',
    status: 'Applied'
  });
  expect(res.statusCode).toBe(201);
});
