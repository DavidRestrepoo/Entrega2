/*
describe('DELETE /api/users/:id', () => {
    test('Debe eliminar un usuario existente', async () => {
      const res = await request(app)
        .delete(`/api/users/${newUserId}`);
      expect(res.statusCode).toEqual(200);
    });
    test('Debe dar error si se le pasa ID invalido', async () =>{
      const res = await request(app)
        .delete('/api/users/1234');
      expect(res.statusCode).toEqual(500);
    });
  });
  */

  it('DELETE /api/users/delete', async () => {
    const req = { body: { cedular: "55555555555" } };
    const res = { 
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
    const user = { _id: "123", nombre: "david ", celular: "55555555555" };
    User.findOne = jest.fn().mockResolvedValue(user);
    User.findByIdAndDelete = jest.fn().mockResolvedValue(user);
    await deleting(req, res);
    expect(User.findOne).toHaveBeenCalledWith({ celular: "55555555555" });
    expect(User.findByIdAndDelete).toHaveBeenCalledWith({ _id: "123" });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        status: 'success!',
        mensaje: 'eliminado con exito',
        userDeleted: user
    });
});