import { describe, expect, it, vi } from 'vitest';
import { tasksReducer } from './taskReducer';

describe('tasksReducer', () => {
  it('adiciona, alterna e remove tarefas sem mutar o estado anterior', () => {
    vi.stubGlobal('crypto', { randomUUID: () => 'nova' });
    const original = [{ id: '1', title: 'Teste', done: false }];
    const added = tasksReducer(original, { type: 'add', title: '  Build  ' });
    expect(added).toEqual([...original, { id: 'nova', title: 'Build', done: false }]);
    expect(tasksReducer(added, { type: 'toggle', id: '1' })[0].done).toBe(true);
    expect(tasksReducer(added, { type: 'remove', id: '1' })).toHaveLength(1);
    expect(original[0].done).toBe(false);
  });
});
