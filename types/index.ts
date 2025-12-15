export interface Work {
  id: string
  title: string
  category: string
  year: string
  description: string
  coverImage: string
  images: string[]
  role: string
  tools: string[]
  link?: string
}

export type WorkCategory = 'research' | 'design' | 'development' | 'creative' | 'all'