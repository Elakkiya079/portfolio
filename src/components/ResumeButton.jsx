import { resumeFile } from '../content.js'
import { IconDownload } from './Icons.jsx'

export default function ResumeButton({ variant = 'solid' }) {
  return (
    <a
      className={`btn btn-${variant}`}
      href={resumeFile.href}
      download={resumeFile.filename}
    >
      <IconDownload />
      Download resume
    </a>
  )
}
