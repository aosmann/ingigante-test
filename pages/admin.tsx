import { NextStudio } from 'next-sanity/studio'
import config from '../sanity.config'

export default function AdminStudio() {
  return <NextStudio config={config} />
}
