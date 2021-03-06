import { getCourse } from '$lib/db/courses'
import { createExercise, giveExerciseCategoryAndAnswers } from '$lib/db/exercises'
import { getUsablePersonas } from '$lib/db/persona'
import { getAllCriteria } from '$lib/db/wcag'
import { Difficulty } from '$lib/utils/stringTypes'
import type { Course, Exercise, Persona, WCAGCriteria } from '@prisma/client'

export async function get({ params, url }) {
  const userId: string = await url.searchParams.get('userId')
  const { courseId } = params
  let course: Course = null
  let personas: Persona[] = []
  let criteria: WCAGCriteria[] = []
  if (courseId /* && userId */) {
    course = await getCourse(courseId)
    personas = await getUsablePersonas('66c50a3e-4985-4e47-a752-324dfb15e8a4')
  }
  console.log(personas.length)
  criteria = await getAllCriteria()

  //console.log('get', course)
  return {
    body: {
      course,
      personas,
      criteria,
    },
  }
}

/** @type {import('./course/[courseId]').RequestHandler} */
export async function post({ request }) {
  let data = await request.json()
  let exercise: Exercise = await createExercise(data.exerciseTitle, data.exerciseContent, data.exerciseType, Difficulty.Beginner, data.personaSelected, data.course)
  let criteria: WCAGCriteria[] = data.operableWcagSelections.concat(data.perceivableWcagSelections, data.robustWcagSelections, data.understandableWcagSelections)
  // TODO: Needs to be more dynamic
  let assignments: { question: string, answers: { text: string, isSolution: boolean }[] }[] = [{ question: data.exerciseQuestion, answers: [{ text: data.codeExercise, isSolution: false }, { text: data.codeSolution, isSolution: true }] }]
  let success: boolean = await giveExerciseCategoryAndAnswers(exercise, criteria, assignments)
  return {
    body: {
      message: success ? 'Exercise successfully created' : 'Damn, something went kinda wrong',
    },
  }
}
