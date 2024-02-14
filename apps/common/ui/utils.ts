export function classNames(...args: (string | undefined | false)[]): string {
  return args.filter(Boolean).join(' ')
}
