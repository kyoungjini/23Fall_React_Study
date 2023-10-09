import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ClassComponent href="http://www.twitter.com" text="go to Twitter" />
    </ul>
  )
}
