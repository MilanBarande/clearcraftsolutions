export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-4">Terms and Conditions for Clear Craft Solutions B.V.</h1>
        <p className="text-md mb-4">Welcome to Clear Craft Solutions! We specialize in providing web and mobile development services.</p>

        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">These Terms and Conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using our website and services.</p>

        <h2 className="text-2xl font-semibold mb-2">Services Provided</h2>
        <p className="mb-4">Clear Craft Solutions offers web and mobile application development services, including but not limited to design, coding, testing, and maintenance services.</p>

        <h2 className="text-2xl font-semibold mb-2">Use License</h2>
        <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Clear Craft Solutions&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
        <ul className="list-disc mb-4 ml-8">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Clear Craft Solutions&apos;s website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or &ldquo;mirror&ldquo; the materials on any other server.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of The Netherlands and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
    </div>
      <a href='/' className='text-md underline hover:no-underline'>Home</a>
    </main>
  )
}