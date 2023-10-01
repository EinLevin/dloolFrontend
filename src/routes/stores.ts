import { writable } from 'svelte/store';
import type { Note } from '../types/notes';
import type { Event } from '../types/events';

export const focusedNote = writable<Note | null>(null);
export const showHomeworkFilter = writable<boolean>(false);
export const subjectIcons = writable<Record<string, string>>({});
export const calendarEvents = writable<Event[] | null>();
