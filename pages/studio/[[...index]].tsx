import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config'

export default function IndexStudio() {
  return <NextStudio config={config} />
}
