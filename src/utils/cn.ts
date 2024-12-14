type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassDictionary = Record<string, any>;
type ClassArgument = ClassValue | ClassArray | ClassDictionary;

export function cn(...args: ClassArgument[]): string {
  return args
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim();
}