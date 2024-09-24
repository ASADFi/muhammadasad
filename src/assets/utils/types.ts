import exp from "constants";

export interface NavigationLink {
    label: string | JSX.Element
    path: string
    title: string
    isInternalLink: boolean
}

export interface SocialLink {
    label: string
    path: string
}

export interface Skill {
    title: string,
    description: string,
    icon: string,
    rating: number
}

export interface Tool {
    title: string,
    icon: string
}

export interface Project {
    id: string,
    category: string
    title: string,
    subtitle: string
    description: string
    coverImage: string
    images: string[]
    playStoreLink: string
    appStoreLink: string
    tools: string[]
    color: string
}
