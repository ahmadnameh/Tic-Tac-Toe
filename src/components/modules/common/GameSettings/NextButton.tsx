export default function NextButton({
  label,
  disabled = false,
}: {
  label: string
  disabled?: boolean
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        w-full sm:w-[180px] h-12 relative flex items-center justify-center gap-1 overflow-hidden
        rounded-[6px] text-base font-semibold shadow-[0_0_0_1px_#7EA4FF]
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]

        ${
          disabled
            ? 'cursor-not-allowed opacity-40 bg-inherit text-[#7EA4FF] pointer-events-none'
            : 'group bg-inherit text-[#7EA4FF] hover:text-[#212121] hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_#7EA4FF]'
        }
      `}
    >
      {/* LEFT ICON */}
      <svg
        viewBox="0 0 24 24"
        className={`
          absolute left-[-25%] z-10 w-4 fill-[#7EA4FF]
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${!disabled && 'group-hover:left-4 group-hover:fill-[#212121]'}
        `}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* LABEL */}
      <span
        className={`
          relative z-10 -translate-x-3
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${!disabled && 'group-hover:translate-x-3'}
        `}
      >
        {label}
      </span>

      {/* BACKGROUND EFFECT */}
      <span
        className={`
          absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 bg-[#7EA4FF] opacity-0
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${!disabled && 'group-hover:h-[220px] group-hover:w-full group-hover:opacity-100'}
        `}
      />

      {/* RIGHT ICON */}
      <svg
        viewBox="0 0 24 24"
        className={`
          absolute right-4 z-10 w-4 fill-[#7EA4FF]
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${!disabled && 'group-hover:right-[-25%] group-hover:fill-[#212121]'}
        `}
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  )
}
