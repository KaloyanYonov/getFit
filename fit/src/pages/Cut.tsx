export default function Cut() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img
        className="w-64 animate-bounce"
        src="https://www.shutterstock.com/image-vector/repairman-tools-running-technical-service-600nw-1043070622.jpg"
        alt="maintenance"
      />
      <h2 className="text-2xl font-bold text-gray-800 mt-6">This page is still being built!</h2>
      <div className="w-64 h-3 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse w-1/2"></div>
      </div>
    </div>
  );
}
