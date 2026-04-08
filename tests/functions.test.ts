import { describe, it, expect } from 'vitest'
import {
  collapseSpaces,
  toKebabCase,
  firstWords,
  isLowercasePhrase,
  countWords,
} from '../src/functions'

// Your job in this lab:
// Read the function documentation in src/functions.ts
// Then write tests that prove the implementations do NOT match the documented behavior.
// These placeholder tests pass now, but they do not test anything useful.
// Replace them with real tests.

describe('collapseSpaces', () => {
    it('should collapse repeated spaces to single space', () => {
      expect(collapseSpaces('Hello   world')).toBe('Hello world')
    })
  
    it('should remove leading and trailing whitespace', () => {
      expect(collapseSpaces('  Hello world  ')).toBe('Hello world')
    })
  
    it('should handle newlines and tabs', () => {
      expect(collapseSpaces('Hello\n\nworld\tfoo')).toBe('Hello world foo')
    })
  
    it('should return empty string for whitespace-only input', () => {
      expect(collapseSpaces('   ')).toBe('')
    })

  // Ideas:
  // - repeated spaces should collapse to one space
  // - leading/trailing whitespace should be removed
  // - tabs and newlines should be handled
})

describe('toKebabCase', () => {
    it('should convert spaces to hyphens and lowercase', () => {
      expect(toKebabCase('Hello World')).toBe('hello-world')
    })
  
    it('should remove punctuation', () => {
      expect(toKebabCase('Hello, World!')).toBe('hello-world')
    })
  
    it('should remove leading and trailing hyphens', () => {
      expect(toKebabCase('  Hello World  ')).toBe('hello-world')
    })
  
    it('should handle multiple spaces and punctuation', () => {
      expect(toKebabCase('Hello,   World!!!')).toBe('hello-world')
    })

  // Ideas:
  // - uppercase letters should become lowercase
  // - spaces should become hyphens
  // - punctuation should be removed
  // - extra hyphens should not remain at the start or end
})

describe('firstWords', () => {
    it('should return first N words', () => {
      expect(firstWords('The quick brown fox jumps', 3)).toBe('The quick brown')
    })
  
    it('should return full string if shorter than limit', () => {
      expect(firstWords('Hello world', 5)).toBe('Hello world')
    })
  
    it('should return empty string when maxWords is 0', () => {
      expect(firstWords('Hello world', 0)).toBe('')
    })
  
    it('should return only first word when maxWords is 1', () => {
      expect(firstWords('The quick brown fox', 1)).toBe('The')
    })

  // Ideas:
  // - should return only the first N words
  // - should return the full string if it is shorter than the limit
  // - should return an empty string when maxWords is 0
})

describe('isLowercasePhrase', () => {
    it('should return true for valid lowercase phrase', () => {
      expect(isLowercasePhrase('web dev')).toBe(true)
    })
  
    it('should return false for uppercase letters', () => {
      expect(isLowercasePhrase('JavaScript')).toBe(false)
    })
  
    it('should return false for punctuation', () => {
      expect(isLowercasePhrase('hello, world')).toBe(false)
    })
  
    it('should return false for leading or trailing whitespace', () => {
      expect(isLowercasePhrase('  hello world')).toBe(false)
      expect(isLowercasePhrase('hello world  ')).toBe(false)
    })
  
    it('should return false for empty string', () => {
      expect(isLowercasePhrase('')).toBe(false)
    })
  
    it('should return false for numbers', () => {
      expect(isLowercasePhrase('hello123')).toBe(false)
    })

  // Ideas:
  // - valid lowercase phrases should return true
  // - uppercase letters should be rejected
  // - punctuation should be rejected
  // - leading/trailing whitespace should be rejected
  // - empty strings should be rejected
})

describe('countWords', () => {
    it('should count words separated by single spaces', () => {
      expect(countWords('one two three')).toBe(3)
    })
  
    it('should handle repeated spaces correctly', () => {
      expect(countWords('one   two  three')).toBe(3)
    })
  
    it('should return 0 for empty string', () => {
      expect(countWords('')).toBe(0)
    })
  
    it('should return 0 for whitespace-only string', () => {
      expect(countWords('   ')).toBe(0)
    })
  
    it('should count single word', () => {
      expect(countWords('hello')).toBe(1)
    })

  // Ideas:
  // - count words separated by spaces
  // - handle repeated spaces correctly
  // - return 0 for empty string
  // - return 0 for whitespace-only string
})
