import { z } from "zod"

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (err) {
      if (err instanceof z.ZodError) {
        // convert array → object { field: message }
        const messages = err.issues.reduce((acc, issue) => {
          const field = issue.path.join(".") || "root"
          acc[field] = issue.message
          return acc
        }, {})

        return res.status(400).json({
          error: "ValidationError",
          messages,
        })
      }

      next(err)
    }
  }
}

export const validateParams = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.params) // <-- validate req.params instead of req.body
      next()
    } catch (err) {
      if (err instanceof z.ZodError) {
        const messages = err.issues.reduce((acc, issue) => {
          const field = issue.path.join(".") || "root"
          acc[field] = issue.message
          return acc
        }, {})
        return res.status(400).json({ error: "ValidationError", messages })
      }
      next(err)
    }
  }
}
