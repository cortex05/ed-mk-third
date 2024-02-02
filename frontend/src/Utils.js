import mathSummaries from './data/mathSubjects'

const stall = () => {
  console.log('simulating a delay')
  return 
}

export const temporarySubjectFetch = () => {
  setTimeout(stall, 3000)
  return mathSummaries
}