export const images = {
  profile: '/images/profile.jpg'
} as const;

export type ImageKey = keyof typeof images;