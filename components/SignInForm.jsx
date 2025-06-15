export default function SignInForm() {
  return (
    <>
      <form
        className="w-full flex justify-center items-center flex-col"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="w-full mb-2.5 flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className={cn(errors.email ? "border-red-500" : "")}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="w-full mb-2.5 flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"

          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <Button
          type="submit"
          variant="gost"

          disabled={isLoading}
        >
          {/* {isLoading ? "Signing in..." : "Sign In"} */}
        </Button>
      </form>
    </>
  )
}