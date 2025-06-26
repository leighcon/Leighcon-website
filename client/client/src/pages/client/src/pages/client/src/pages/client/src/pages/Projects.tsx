import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Filter, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/FileUpload";
import ProjectModal from "@/components/ProjectModal";
import ProjectEditor from "@/components/ProjectEditor";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import type { Project } from "@shared/schema";

export default function Projects() {
  useScrollToTop();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: projects, isLoading, refetch } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "rooming-house", label: "Rooming Houses" },
    { id: "dual-occupancy", label: "Dual Occupancy" },
    { id: "townhouse", label: "Townhouses" }
  ];

  const filteredProjects = projects?.filter(project => 
    selectedCategory === "all" || project.category === selectedCategory
  ) || [];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleUploadComplete = () => {
    refetch();
    setShowUpload(false);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
  };

  const handleSaveProject = (updatedProject: Project) => {
    setEditingProject(null);
    queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
  };

  const deleteMutation = useMutation({
    mutationFn: (projectId: number) => apiRequest('DELETE', `/api/projects/${projectId}`),
    onSuccess: () => {
      toast({
        title: "Project deleted",
        description: "The project has been successfully removed.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setProjectToDelete(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleDeleteProject = (project: Project) => {
    setProjectToDelete(project);
  };

  const confirmDelete = () => {
    if (projectToDelete) {
      deleteMutation.mutate(projectToDelete.id);
    }
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    planned: "bg-gray-100 text-gray-800"
  };

  const categoryLabels = {
    residential: "Residential",
    "rooming-house": "Rooming House",
    "dual-occupancy": "Dual Occupancy",
    townhouse: "Townhouse"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">Our Projects</h1>
            <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">
              Explore our portfolio of exceptional residential developments across Melbourne. Each project showcases our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <Button
              onClick={() => setShowUpload(!showUpload)}
              className="bg-brand-blue text-white hover:bg-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Upload Project Images
            </Button>
          </div>

          {showUpload && (
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-6">Upload Project Images</h3>
                <FileUpload onUploadComplete={handleUploadComplete} />
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  ${selectedCategory === category.id 
                    ? "bg-brand-blue text-white hover:bg-blue-700" 
                    : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  }
                `}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-blue mx-auto"></div>
              <p className="mt-4 text-brand-slate">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-slate text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div onClick={() => openProjectModal(project)}>
                    <div className="relative">
                      <img
                        src={project.images?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                          {project.status}
                        </Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {categoryLabels[project.category as keyof typeof categoryLabels]}
                        </Badge>
                      </div>
                      
                      <p className="text-brand-slate mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-brand-slate">
                          {project.location}
                        </span>
                        <span className="text-sm font-medium text-brand-blue">
                          View Details →
                        </span>
                      </div>
                    </CardContent>
                  </div>
                  
                  {/* Admin Controls */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditProject(project);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProject(project);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Project Editor */}
      {editingProject && (
        <ProjectEditor
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!projectToDelete} onOpenChange={() => setProjectToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{projectToDelete?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
