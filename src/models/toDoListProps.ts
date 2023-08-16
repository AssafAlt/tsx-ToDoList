export interface ToDoListProps {
  items: { id: string; text: string }[];
  onRemoveTodo: (id: string) => void;
}
