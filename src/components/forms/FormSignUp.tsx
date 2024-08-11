export default function FormSignUp() {
  return (
    <form className="flex flex-col gap-1 w-full min-w-40 p-2 bg-red-700 rounded">
      <input type="email" name="email" placeholder="example@gmail.com"/>
      <input type="password" name="password"/>
      <input type="password"  name="password"/>
      <button type="submit">Submit</button>
    </form>
  );
}
