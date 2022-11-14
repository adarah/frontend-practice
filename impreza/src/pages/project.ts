import project1 from '@images/project-1.jpeg'
import project2 from '@images/project-2.jpeg'
import project3 from '@images/project-3-scaled.jpeg'
import project4 from '@images/project-4.jpeg'
import project5 from '@images/project-5.jpeg'
import project6 from '@images/project-6-scaled.jpeg'
import project7 from '@images/project-7.jpeg'
import project8 from '@images/project-8.jpeg'
import type { StaticImageData } from 'next/image'

export interface Project {
  title: string
  tag: string
  imgSrc: StaticImageData
  href: string
}

export function getProjects(): Project[] {
  const projects: Array<Omit<Project, 'href'>> = [
    {
      title: 'boxed water is better',
      imgSrc: project1,
      tag: 'filming'
    },
    {
      title: 'cooking palleo',
      imgSrc: project2,
      tag: 'art direction'
    },
    {
      title: 'slack experimental promotion',
      imgSrc: project3,
      tag: 'production'
    },
    {
      title: 'bob cut special',
      imgSrc: project4,
      tag: 'branding'
    },
    {
      title: 'magic mind promo',
      imgSrc: project5,
      tag: 'art direction'
    },
    {
      title: 'abstract neon graphics',
      imgSrc: project6,
      tag: 'concept vision'
    },
    {
      title: 'joe & the juice',
      imgSrc: project7,
      tag: 'art direction'
    },
    {
      title: 'rose coctails campaign',
      imgSrc: project8,
      tag: 'production'
    }
  ]

  return projects.map(p => ({ ...p, href: `/portfolio${slugify(p.title)}` }))
}

function slugify(title: string): string {
  return title
    .replaceAll(/[\W_]/g, '')
    .replaceAll(/\s+/g, '-')
}