import { describe, expect, it, vi } from 'vitest';
import { tasksReducer } from './taskReducer';

// Teste das três ações usadas pela interface e da imutabilidade da lista anterior.
describe('tasksReducer', () => {
  it('adiciona, alterna e remove tarefas sem mutar o estado anterior', () => {
    // ID previsível evita que a aleatoriedade atrapalhe a comparação do teste.
    vi.stubGlobal('crypto', { randomUUID: () => 'nova' });
    const original = [{ id: '1', title: 'Teste', done: false }];
    const added = tasksReducer(original, { type: 'add', title: '  Build  ' });
    expect(added).toEqual([...original, { id: 'nova', title: 'Build', done: false }]);
    expect(tasksReducer(added, { type: 'toggle', id: '1' })[0].done).toBe(true);
    expect(tasksReducer(added, { type: 'remove', id: '1' })).toHaveLength(1);
    // Confirma que o reducer não alterou o objeto original recebido como entrada.
    expect(original[0].done).toBe(false);
  });
});
