import Link from 'next/link'

export default function AuthErrorPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <div className="w-full max-w-md space-y-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Authentication Error
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    There was a problem signing you in.
                </p>
                <div className="mt-8">
                    <Link
                        href="/login"
                        className="text-sm font-semibold text-neutral-900 underline underline-offset-4 dark:text-white"
                    >
                        Try again
                    </Link>
                </div>
            </div>
        </div>
    )
}
